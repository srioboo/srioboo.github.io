<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';

    // import css
    import '$lib/sass/main.scss';
</script>

<Header />
<slot />
<Footer />