<script>
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// import css
	// import '$lib/sass/main.scss';
	import '@picocss/pico/css/pico.min.css';
</script>

<Header />
<slot />
<Footer />
