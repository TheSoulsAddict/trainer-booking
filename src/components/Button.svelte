<script lang="ts">
	let { href, text } = $props();
</script>

<a {href} class="px-8 py-2 text-center hover:bg-slate-700 active:bg-slate-600">{text}</a>
