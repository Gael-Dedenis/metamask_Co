"use strict";

/**
 * Init Moralis
 */
const serverUrl = "https://l3vmjeoki6sa.usemoralis.com:2053/server";
const appId     = "wJ2S5H0pLTOu4UUNu45iTmz6xPYLfLpZDyPGUw8R";

Moralis.start({serverUrl, appId});

/**
 * Fonction de loggin
 */
const addressUser = document.getElementById("address");

async function login() {
    let user = Moralis.User.current();
    if (!user) {
        user = await Moralis.authenticate({
            signingMessage: "Connection avec votre Wallet Eth",
        })
            .then(function (user) {
                addressUser.innerText = "Votre adresse est : " + user.get("ethAddress");
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

/**
 * Fonction de logout
 */
async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
    addressUser.innerText = "";
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;
