const data = {
    "security": {
        "whitelist": true,
        "verification": true,
        "inviteBlocker": true,
        "encryptAll": false,
        "funnyVerification": false
    },
    "dennis": {
        "pennis": "hi"
    },
    "cosmetic": {
        "activity": "Pizza",
        "lemonChadsDad": true,
        "igans": [
            "fooligan",
            "trolligan",
            "clownigan",
            "bafoonigan",
            "throwigan",
            "voidigan",
            "hooligan",
            "bombadigan",
            "hoponigan",
            "illiteratigan",
            "pissigan"
        ]
    },
    "verification": {
        "verifyChannel": 1190520397544833094,
        "verifyControlChannel": 1190520430256193678,
        "verifiedRole": 1190520908566249573
    },
    "encryption": {
        "defaultChannel": 1,
        "defaultSecurity": 5,
        "apiEndpoint": "/pizzac"
    },
    "tickets": {
        "ticketsCategory": 1190520493216907324,
        "supportRole": 1190521203287404624
    },
    "logging": {
        "refreshRate": 10,
        "nextcordLogLevel": true
    },
    "circuitBreaker": {
        "circuitBreaker": true,
        "circuitBreakerAmtThreshold": 3,
        "circuitBreakerResetTime": 1
    },
    "other": {
        "guildId": 1190519111629946980,
        "caseFileCategories": [
            1190520582555586581,
            1196304860186947805
        ],
        "enclosureCategory": 1192384570130190417,
        "botId": 1186219980493180989,
        "webApi": "https://mrviper111.dev/api"
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementsByClassName("config-container")[0];

    if (!container) {
        console.error("Container element not found. Check the class name.");
        return;
    }

    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const button = document.createElement("button");
            button.className = "collapsible";
            button.textContent = capitalizeFirstLetter(key);

            const collapsibleContent = document.createElement("div");
            collapsibleContent.className = "collapsible-content";
            
            for (const nestedKey in data[key]) {
                if (data[key].hasOwnProperty(nestedKey)) {
                    const paragraph = document.createElement("p");

                    const keySpan = document.createElement("span");
                    keySpan.textContent = `${nestedKey}: `;
                    paragraph.appendChild(keySpan);

                    const input = document.createElement("input");
                    input.name = nestedKey;
                    input.type = getInputType(data[key][nestedKey]);
                    input.value = getInputValue(data[key][nestedKey]);

                    // Add a class to indicate whether it's a list or not
                    input.classList.add(input.type);

                    if (input.type === "checkbox" && data[key][nestedKey] === true) {
                        input.checked = true;
                    }

                    paragraph.appendChild(input);
                    collapsibleContent.appendChild(paragraph);
                }
            }

            container.appendChild(button);
            container.appendChild(collapsibleContent);

            console.log("Appended:", key);
        }
    }
});

function getInputType(value) {
    if (Array.isArray(value)) {
        return "list";
    } else if (typeof value === "string" || typeof value === "number") {
        return "text";
    } else if (typeof value === "boolean") {
        return "checkbox";
    }
}

function getInputValue(value) {
    if (typeof value === "boolean") {
        return value;
    } else {
        return value !== undefined ? value : "";
    }

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function logLatestValues() {
    const inputs = document.querySelectorAll(".collapsible-content input");

    inputs.forEach(input => {
        const collapsibleContent = input.closest(".collapsible-content");
        const button = collapsibleContent.previousElementSibling;
        const objectName = button.textContent.toLowerCase();
        const propertyName = input.name;

        if (objectName in data && propertyName in data[objectName]) {
            if (input.type === "number") {
                data[objectName][propertyName] = Number(input.value);
            } else if (input.type === "checkbox") {
                data[objectName][propertyName] = input.checked;
            } else {
                const inputValue = handleCommaString(input.value);
                data[objectName][propertyName] = inputValue;
            }
        }
    });

    console.log("Updated data object:", data);
}

function handleCommaString(value) {
    if (/\S,\S/.test(value)) {
        return value.split(',').map(item => item.trim());
    }

    return value;
}

function generateCommand() {
    alert("/config load data:6005fa4e-9ca8-4415-98fd-33adfc32c899");
}

