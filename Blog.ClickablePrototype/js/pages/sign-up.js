﻿var SignUpPage = function () {

    var that = this;

    this.initPage = function () {
        $("#sign-up-link").on("click", this.signUpLinkClick);
    };

    this.signUpLinkClick = function () {
        $(".sign-in").css("display", "none");
        $(".sign-up").css("display", "block");
    };

    

};

$(function () {
    var signUpPage = new SignUpPage();
    signUpPage.initPage();

});