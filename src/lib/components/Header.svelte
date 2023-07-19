<script>
	import { _ } from "svelte-i18n"
</script>

<!-- Header -->
<div id="header">
	<div class="top">
		<!-- Logo -->
		<div id="logo">
			<span class="image avatar48"><img src="/images/avatar.jpg" alt="" /></span>
			<h1 id="title">Salvador Rioboo</h1>
			<p>Full Stack Developer</p>
		</div>

		<!-- Nav -->
		<nav id="nav">
			<ul>
				<li><a href="#top" id="top-link"><span class="icon solid fa-home">{$_('header_component.nav.intro')}</span></a></li>
				<li>
					<a href="#portfolio" id="portfolio-link"
						><span class="icon solid fa-th">{$_('header_component.nav.portfolio')}</span></a
					>
				</li>
				<li>
					<a href="#about" id="about-link"><span class="icon solid fa-user">{$_('header_component.nav.about')}</span></a>
				</li>
				<!-- <li>
					<a href="#contact" id="contact-link"
						><span class="icon solid fa-envelope">{$_('header_component.nav.contact')}</span></a
					>
				</li> -->
			</ul>
		</nav>
	</div>

	<div class="bottom">
		<!-- Social Icons -->
		<ul class="icons">
			<!--<li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>-->
			<!--<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>-->
			<li>
				<a href="https://github.com/srioboo" class="icon brands fa-github"
					><span class="label">Github</span></a
				>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/salvador-rioboo-naranjo/" class="icon brands fa-linkedin"
				><span class="label">Linkedin</span></a
				>
			</li>
			<!--<li><a href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></a></li>-->
			<!--<li><a href="#" class="icon solid fa-envelope"><span class="label">Email</span></a></li>-->
		</ul>
	</div>
</div>
