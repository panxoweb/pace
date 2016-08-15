<div class="container" style="width:80%; margin:0 auto;">
  <h3>Módulo Financiero</h3>
 </div>
 <br>
 <br>
 
 
 <div id="table_center">
  <?php foreach ($proyectos as $data_proyectos){ ?>
<table border=1 style="width:100%">
  <tr>
  <td><?php echo "<b>Código</b>: ". $data_proyectos->P_CODIGO_PROYECTO; ?></td><td><?php echo "<b>Proyecto</b>: " .$data_proyectos->P_NOMBRE_PROYECTO; ?></td>
  </tr>
 <?php } ?> 
</table>
<br><br>

<table border=1 style="width:100%;">
<tr>
        <th scope="colgroup" colspan="12">Gasto adquirible</th>
    </tr>
    <tr>
        <th scope="colgroup" colspan="12">Bienes</th>
    </tr>
    <tr>
        <th scope="colgroup" colspan="12">Obras menores</th>
    </tr>
    <tr>
        <th scope="colgroup" colspan="12">Servicios de consultería</th>
    </tr>
    <tr>
        <th scope="colgroup" colspan="12">Servicios de no consultería</th>
    </tr>

        <tr>
        <th>Estrategia</th>
        <th>Componente</th>
        <th>Resultado</th>
        <th>Tipo gasto</th>
        <th>Detalle gasto</th>
        <th>Monto programado</th>
        <th>Monto gastado</th>
        <th>Saldo</th>
        <th>estado</th>
    </tr>
    <?php foreach ($gastos as $data_gastos){ ?>
        <?php if($data_gastos->P_ID_PROYECTO == $data_proyectos->P_ID_PROYECTO){ ?>
    <tr>
        <th><?php echo $data_gastos->P_ABREVIACION_AREA; ?></th>
        <td><?php echo $data_gastos->P_NOMBRE_ACTIVIDAD; ?></td>
        <td><?php echo "RESULTADO"; ?></td>
        <td><?php echo $data_gastos->P_NOMBRE_CLASIFICACION_ITEM; ?></td>
        <td><?php echo $data_gastos->P_DETALLE_ITEM ?></td>
        <td><?php echo $data_gastos->P_COSTO_PLANIF ?></td>
        <td><?php echo $data_gastos->P_COSTO ?></td>
		
		<?php $subtotal=(($data_gastos->P_COSTO_PLANIF)-($data_gastos->P_COSTO));
		if($subtotal<0){
			$total='Saldo en Contra';
		}
		if($subtotal==0){
			$total='Saldo cero';
		}
		if($subtotal>0){
			$total='Saldo a Favor';
		}
		?>
        <td><?php echo $subtotal ?></td>
        <td><?php echo $total ?></td>
    </tr>
<?php } ?>
<?php } ?>
 </table>

</div>