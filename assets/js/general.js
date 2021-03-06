	(function(a){a.createModal=function(b){defaults={title:"Proyecto Pace",message:"",closeButton:true,closeIdButton:"closeButton",scrollable:false,size:"lg",labelButton:"Cancelar",confirmButton:false,confirmIdButton:"#confirmButton",labelconfirmButton:"Confirmar",idModal : "myModal", backdrop: false,  };var b=a.extend({},defaults,b);var c=(b.scrollable===true)?'style="max-height: 484px;overflow-y: auto;"':"";html='<div class="modal fade" id="'+b.idModal+'">';html+='<div class="modal-dialog modal-'+b.size+'">';html+='<div class="modal-content">';html+='<div class="modal-header">';html+='<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span></button>';if(b.title.length>0){html+='<h4 class="modal-title">'+b.title+"</h4>"}html+="</div>";html+='<div class="modal-body" '+c+">";html+=b.message;html+="</div>";if(b.closeButton===true || b.confirmButton===true){html+='<div class="modal-footer">';if(b.closeButton===true){html+='<button type="button" class="btn btn-default" id="'+b.closeIdButton+'" data-dismiss="modal">'+b.labelButton+'</button>'}if(b.confirmButton===true){html+='<button type="button" class="btn btn-primary" id="'+b.confirmIdButton+'">'+b.labelconfirmButton+'</button>'}html+="</div>";}html+="</div>";html+="</div>";html+="</div>";a("body").prepend(html); if(b.backdrop == 'static'){        a("#" + b.idModal).modal( {backdrop: 'static',		keyboard: false}).on("show.bs.modal", function() {});}a("#"+b.idModal).modal().on("hidden.bs.modal",function(){a(this).remove()})}})(jQuery);



$(document).ready(function() {

	$.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '<Ant',
        nextText: 'Sig>',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Mi�rcoles', 'Jueves', 'Viernes', 'S�bado'],
        dayNamesShort: ['Dom','Lun','Mar','Mi�','Juv','Vie','S�b'],
        dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','S�'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
	$.datepicker.setDefaults( $.datepicker.regional[ "es" ] );
	$( ".fecha" ).datepicker({
      changeMonth: true,
      changeYear: true
    });



		$("#form_login").validate({


			rules: {
				email:{required: true},
				password:{required: true}
			},
			messages: {
				email:{required: "Ingrese email"},
				password:{required: "Ingrese password" }
			},
			submitHandler: function(form) {
				var url = host+'login/startSession'; // El script a dónde se realizará la petición.
						$.ajax({
							type: "POST",
							url: url,
							data: $("#form_login").serialize(),
							beforeSend: function () {
										// $('.enviar').prop('disabled', true);
									// $(".loading").css("display", "block");
							},	   // Adjuntar los campos del formulario enviado.
							success: function(data)
							{
							// alert(data);
								if(data=='success'){
									window.location.href = 'inicio';
								}
								else{
									if(data=='fail'){
										$("#respuesta").html('<label class="error">Usuario y/o clave Inválidos</label>');
									}
								}
							}
						});
			}

		});



		$('#select_proyecto').on("change", function(){
			var proyecto=$(this).val();


			var url = host+'lista/display_lista'; // El script a dónde se realizará la petición.
					$.ajax({
						type: "POST",
						url: url,
						data: {proyecto:proyecto},
						beforeSend: function () {
									// $('.enviar').prop('disabled', true);
								// $(".loading").css("display", "block");
						},	   // Adjuntar los campos del formulario enviado.
						success: function(data)
						{
						if(proyecto!=''){
						$("#respuesta").html(data);
						}
						else{
						$("#respuesta").html('');
						}
						}
					});

		});

		$('#select_proyecto_financiero').on("change", function(){
			var proyecto=$(this).val();


			var url = host+'financiero/display_financiero'; // El script a dónde se realizará la petición.
					$.ajax({
						type: "POST",
						url: url,
						data: {proyecto:proyecto},
						beforeSend: function () {
									// $('.enviar').prop('disabled', true);
								// $(".loading").css("display", "block");
						},	   // Adjuntar los campos del formulario enviado.
						success: function(data)
						{
						if(proyecto!=''){
						$("#respuesta").html(data);
						}
						else{
						$("#respuesta").html('');
						}
						}
					});

		});
		$(document).on("change",'#select_proyecto_arbol', function(){
			var proyecto=$(this).val();


			var url = host+'inicio/display_arbol'; // El script a dónde se realizará la petición.
					$.ajax({
						type: "POST",
						url: url,
						data: {proyecto:proyecto},
						beforeSend: function () {
									// $('.enviar').prop('disabled', true);
								// $(".loading").css("display", "block");
						},	   // Adjuntar los campos del formulario enviado.
						success: function(data)
						{
						if(proyecto!=''){
						$("#respuesta").html(data);
						$('.tree li').css("display","none");
						$('.tituloProyecto').css("display","block");
						}
						else{
						$("#respuesta").html('');

						}
						}
					});

		});

});





// $(".form-signin").validate({
// 		ignore: [],
// 		rules: {
// 			email: {required: true},
// 			password: {required: true}
// 		},
// 		messages: {
// 			email: {required:"Ingrese email"},
// 			password: {required:"Ingrese password "}
// 		}
// 	});
