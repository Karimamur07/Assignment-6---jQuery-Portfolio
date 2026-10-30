$(document).ready(function() {

    console.log("jQuery is ready!");

    $("#fade-in-btn").click(function() {
        $(".gallery-img").fadeIn(1000);
    });

    $("#fade-out-btn").click(function() {
        $(".gallery-img").fadeOut(1000);
    });

    $("#fade-toggle-btn").click(function() {
        $(".gallery-img").fadeToggle("fast");
    });


    $(".slide-heading").click(function() {
        const panel = $(this).next(".slide-panel");

        if (panel.is(":visible")) {
            panel.slideUp("slow");
        } 
        else {
            panel.slideDown("slow");
        }
    });

    $("#toggle-all-btn").click(function() {
        $(".slide-panel").slideToggle("slow");
    });


    function getSkillValue() {
        return $("#skill-input").val().trim();
    }

    $("#add-skill-btn").click(function() {
        const skill = getSkillValue();
        if (skill === "") {
            alert("Please enter a skill!");
            return;
        }
        $("#skills-list").append("<li>" + skill + "</li>");
        $("#skill-input").val("");
    });

    $("#prepend-skill-btn").click(function() {
        const skill = getSkillValue();
        if (skill === "") {
            alert("Please enter a skill!");
            return;
        }
        $("#skills-list").prepend("<li>" + skill + "</li>");
        $("#skill-input").val("");
    });

    $("#remove-skill-btn").click(function() {
        $("#skills-list li:last").remove();
    });


    
    $("#change-link-btn").click(function() {
        $("#social-link").attr("href", "https://www.instagram.com/ikm_ls/");

        $("#social-link").text("My Instagram Profile");
    });


    $("#name-input, #email-input").on("input", function() {
        
        const nameValue = $("#name-input").val();
        const emailValue = $("#email-input").val();
        
        $("#preview-name").text(nameValue);
        $("#preview-email").text(emailValue);
    });

});

$(document).ready(function() {
    console.log("jQuery is ready!");

    $("#change-greeting-btn").click(function() {
        $(".headline").text("Welcome to my jQuery Portfolio!");
    });

    
        
    $("#theme-dark-btn").click(function() {
        $("body").css({
            "background-color": "#1e1e1e",
            "color": "#ffffff"
        });
        $("section, header").css({
            "background-color": "#2d2d2d",
            "color": "#ffffff"
        });
    });


    $("#theme-light-btn").click(function() {
        $("body").css({
            "background-color": "#f4f7f6",
            "color": "#333333"
        });
        $("section, header").css({
            "background-color": "#ffffff",
            "color": "#333333"
        });
    });
});


$("#hide-btn").click(function() {
    $("#status-and-facts").hide();
});

$("#show-btn").click(function() {
    $("#status-and-facts").show();
});

$("#toggle-btn").click(function() {
    $("#status-and-facts").toggle();
});