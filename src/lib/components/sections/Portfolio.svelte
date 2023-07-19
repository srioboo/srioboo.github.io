<!-- Portfolio -->
<script>
    import { _ } from 'svelte-i18n'
</script>
<section id="portfolio" class="two">
    <div class="container">

        <header>
            <h2>{$_('portfolio_page.title')}</h2>
        </header>

        <p>{$_('portfolio_page.content')}</p>

        <div class="row">
            <div class="col-4 col-12-mobile">
                <article class="item">
                    <a href="#" class="image fit"><img src="../../../static/images/pic02.jpg" alt="" /></a>
                    <header>
                        <h3>Ipsum Feugiat</h3>
                    </header>
                </article>
                <article class="item">
                    <a href="#" class="image fit"><img src="../../../static/images/pic03.jpg" alt="" /></a>
                    <header>
                        <h3>Rhoncus Semper</h3>
                    </header>
                </article>
            </div>
            <div class="col-4 col-12-mobile">
                <article class="item">
                    <a href="#" class="image fit"><img src="../../../static/images/pic04.jpg" alt="" /></a>
                    <header>
                        <h3>Magna Nullam</h3>
                    </header>
                </article>
                <article class="item">
                    <a href="#" class="image fit"><img src="../../../static/images/pic05.jpg" alt="" /></a>
                    <header>
                        <h3>Natoque Vitae</h3>
                    </header>
                </article>
            </div>
            <div class="col-4 col-12-mobile">
                <article class="item">
                    <a href="#" class="image fit"><img src="../../../static/images/pic06.jpg" alt="" /></a>
                    <header>
                        <h3>Dolor Penatibus</h3>
                    </header>
                </article>
                <article class="item">
                    <a href="#" class="image fit"><img src="../../../static/images/pic07.jpg" alt="" /></a>
                    <header>
                        <h3>Orci Convallis</h3>
                    </header>
                </article>
            </div>
        </div>

    </div>
</section>
