# svelte-components
Simple set of Svelte components to rapidly build web applications.

## Installation
```bash
npm install https://github.com/AlessandroBellati/svelte-components
```

## CSS import
[+layout.svelte](/src/routes/+layout.svelte)
```svelte
<script>
    import "/node_modules/svelte-components/dist/css/index.css"
</script>

<slot></slot>
``` 
## Svelte 5
To update to the new alpha version of Svelte 5 run the following command:
```bash
npm install --save-dev svelte@next
```