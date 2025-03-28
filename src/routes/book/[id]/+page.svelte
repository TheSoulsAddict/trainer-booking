<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	let { data } = $props();
	let id = data.term_id;

	let name = $state();
	let lastname = $state();
	let email = $state();

	function addBooking() {
		goto('/success');
	}
</script>

<div class="pt-8">
	<label for="name">Jmeno</label>
	<input type="text" name="name" bind:value={name} />
	<label for="lastname">Prijmeni</label>
	<input type="text" name="lastname" bind:value={lastname} />
</div>
<div class="pt-8">
	<label for="email">Email</label>
	<input type="text" name="email" bind:value={email} />
</div>
<div class="pt-8">
	<button class="cursor-pointer" onclick={(e) => addBooking()}>Odeslat</button>
</div>
