<!-- Contact -->
<script>
    import { _ } from 'svelte-i18n'
</script>
<section id="contact" class="four">
    <div class="container">

        <header>
            <h2>{$_('contact_page.title')}</h2>
        </header>

        <p>{ $_('contact_page.content') }</p>

        <form method="post" action="#">
            <div class="row">
                <div class="col-6 col-12-mobile"><input type="text" name="name" placeholder="Name" /></div>
                <div class="col-6 col-12-mobile"><input type="text" name="email" placeholder="Email" /></div>
                <div class="col-12">
                    <textarea name="message" placeholder="Message"></textarea>
                </div>
                <div class="col-12">
                    <input type="submit" value="Send Message" />
                </div>
            </div>
        </form>

    </div>
</section>
