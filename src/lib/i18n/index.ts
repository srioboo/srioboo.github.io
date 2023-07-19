// configuration i18n
import { browser } from '$app/environment'
import { init, register } from 'svelte-i18n'

const defaultLocale = 'es'

register('en', () => import('./locales/en.json'))
register('es', () => import('./locales/es.json'))

init({
    fallbackLocale: defaultLocale,
    initialLocale: browser ? window.navigator.language : defaultLocale,
})
