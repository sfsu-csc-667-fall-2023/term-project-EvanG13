const express = require("express");
const router = express.Router();

router.get("/", (_request, response) => {
    const teamLetter = "D"
    const teamMembers = [
        "Ahmar Huda",
        "Caimin Rybolt-O'Keefe",
        "Cleveland Plonsey",
        "Evan Giampaoli",
    ]

    response.render("root", { teamLetter, teamMembers });
})

module.exports = router;
