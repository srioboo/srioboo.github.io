<script>
	import { _ } from "svelte-i18n"
	// TODO - corregir import LocaleSwitcher from './sections/LocaleSwitcher.svelte';
</script>

<!-- Header -->
<div id="header" class="w-80 text-white text-right flex flex-col justify-between bg-slate-900 top-0 fixed left-0 h-full">
	<div class="flex-grow">
		<!-- TODO - corregir
		<LocaleSwitcher value={$locale} on:locale-changed={e => setupI18n({ withLocale: e.detail }) }/>
		-->
		<!-- Logo -->
		<div id="logo" class="relative mt-7 mr-6 ml-6 mb-6 cursor-default">
			<span class="relative top-0 left-0 mt-0 mr-0 ml-0 mb-2 inline-block"><img src="/images/avatar.jpg" alt="" class="block"/></span>
			<h1 id="title" class="relative text-white text-lg font-semibold m-0 p-0">Salvador Rioboo</h1>
			<p class="text-xs">Full Stack Developer</p>
		</div>

		<!-- Nav -->
		<nav id="nav" class="block align-baseline m-0 p-0 text-right">
			<ul class="list-none p-0 m-0 align-baseline text-right">
				<li class="pl-0"><a href="#top" id="top-link" class="text-sm pt-2 pb-2 no-underline"><span class="icon solid fa-home pr-9 relative block text-sm">{$_('header_component.nav.intro')}</span></a></li>
				<!-- <li>
					<a href="#portfolio" id="portfolio-link"
						><span class="icon solid fa-th">{$_('header_component.nav.portfolio')}</span></a
					>
				</li>
				<li>
					<a href="#about" id="about-link"><span class="icon solid fa-user">{$_('header_component.nav.about')}</span></a>
				</li> -->
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
