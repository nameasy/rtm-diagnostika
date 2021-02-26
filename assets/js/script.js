(function() {
	var header = document.querySelector(".header");
	let headroom = new Headroom(header);
	headroom.init()
}());
$(document).ready(function() {
	$("#btn_block-switch").on("click", function() {
		$("#btn_grid-switch").removeClass("is-active"), $("#btn_block-switch").addClass("is-active"), $(".examinations, .medical-centers").removeClass("grid col-2").addClass("block"), $(".grid__item.box").removeClass("grid__item box").addClass("block__item")
	});
	$("#btn_grid-switch").on("click", function() {
		$("#btn_block-switch").removeClass("is-active"), $("#btn_grid-switch").addClass("is-active"), $(".examinations, .medical-centers").removeClass("block").addClass("grid col-2"), $(".block__item").removeClass("block__item").addClass("grid__item box")
	});
	$("#btn_sett").on("click", function() {
		$(".advanced-options").hasClass("is-hidden") ? $(".advanced-options").removeClass("is-hidden").addClass("not-hidden") : $(".advanced-options").removeClass("not-hidden").addClass("is-hidden")
	});
	$("#reg-num, #password").on("input", function() {
		$("#reg-num").val() && $("#password").val() ? $("#btn_sign-in").removeClass("not-active") : $("#btn_sign-in").addClass("not-active")
	});
	$("#reg-num, #password, #field").on("input", function() {
		$("#reg-num").val() && $("#password").val() && $("#field").val() ? $("#btn_sign-up").removeClass("not-active") : $("#btn_sign-up").addClass("not-active")
	});
});