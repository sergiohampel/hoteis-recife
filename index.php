<?php include('inc/header.php') ?>

<body data-ng-app="APP">
	<header>
		<h1><?php echo _TITLE ?></h1>
		<p>Este é um projeto lab que tem como objetivo o estudo e prática de implementação do framework AngularJS. Todo o projeto foi escrito utilizando o framework, obtendo os dados através do Portal de Dados Abertos da Prefeitura do Recife.</p>
	</header>

	<ul class="menu">
		<li ng-class="{active: activeLink == '/'}"><a href="#/" title="Lista" class="icon-list"></a></li>
		<li ng-class="{active: activeLink == '/map'}"><a href="#/map" title="Mapa" class="icon-location"></a></li>
	</ul>

	<!-- view - start -->
	<div data-ng-view class="content"></div>
	<!-- view - end -->

	<!-- libs - start -->
	<script src="libs/js/angular.min.js"></script>
	<script src="libs/js/angular-route.min.js"></script>
	<script src='http://maps.googleapis.com/maps/api/js?sensor=false'></script>
	<!-- libs - end -->

	<!-- development - start -->
	<script src="dist/js/scripts.combined.min.js"></script>
	<!-- development - end -->
</body>
</html>