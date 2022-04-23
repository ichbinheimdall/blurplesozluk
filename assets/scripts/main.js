$("document").ready(async function() {
	setTimeout(async() => {
		await $('#loader').addClass("animate__animated animate__fadeOut hidden");
	}, 1000)
});