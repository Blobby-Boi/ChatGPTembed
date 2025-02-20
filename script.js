function createChatGPTpopup() {
    const chatContainer = document.createElement("div");
    document.body.appendChild(chatContainer);

    const chatHeader = document.createElement("div");
    chatContainer.appendChild(chatHeader);

    const tabContainer = document.createElement("div");
    chatHeader.appendChild(tabContainer);

    const googleTab = document.createElement("button");
    googleTab.innerText = "Google";
    tabContainer.appendChild(googleTab);

    const chatTab = document.createElement("button");
    chatTab.innerText = "ChatGPT";
    tabContainer.appendChild(chatTab);
    
    const proxyTab = document.createElement("button");
    proxyTab.innerText = "Proxy";
    tabContainer.appendChild(proxyTab);

    const toolsTab = document.createElement("button");
    toolsTab.innerText = "Tools";
    tabContainer.appendChild(toolsTab);

    const closeButton = document.createElement("button");
    closeButton.innerText = "×";
    chatHeader.appendChild(closeButton);

    const iframe = document.createElement("iframe");
    iframe.src = "https://www.google.com/webhp?igu=1";
    chatContainer.appendChild(iframe);

    const toolsContainer = document.createElement("div");
    toolsContainer.style.display = "none";
    toolsContainer.style.padding = "10px";
    toolsContainer.style.fontFamily = "Arial, sans-serif";
    chatContainer.appendChild(toolsContainer);

    const rightClickCheckbox = document.createElement("input");
    rightClickCheckbox.type = "checkbox";
    rightClickCheckbox.id = "rightClickToggle";

    const rightClickLabel = document.createElement("label");
    rightClickLabel.innerText = "Enable Right Clicking";
    rightClickLabel.style.marginLeft = "5px";
    rightClickLabel.style.fontFamily = "Arial, sans-serif";
    rightClickLabel.style.fontSize = "16px";
    rightClickLabel.setAttribute("for", "rightClickToggle");

    toolsContainer.appendChild(rightClickCheckbox);
    toolsContainer.appendChild(rightClickLabel);

    toolsContainer.appendChild(document.createElement("br"));
    toolsContainer.appendChild(document.createElement("br"));

    const codeInputLabel = document.createElement("label");
    codeInputLabel.innerText = "Enter Javascript Code:";
    codeInputLabel.style.fontSize = "16px";
    codeInputLabel.style.fontFamily = "Arial, sans-serif";
    toolsContainer.appendChild(codeInputLabel);

    const codeInput = document.createElement("textarea");
    codeInput.style.width = "100%";
    codeInput.style.height = "100px";
    codeInput.style.resize = "none";
    toolsContainer.appendChild(codeInput);

    const runCodeButton = document.createElement("button");
    runCodeButton.innerText = "Execute";
    toolsContainer.appendChild(runCodeButton);

    const outputArea = document.createElement("pre");
    outputArea.style.fontFamily = "monospace";
    outputArea.style.background = "#f5f5f5";
    outputArea.style.padding = "10px";
    outputArea.style.marginTop = "10px";
    toolsContainer.appendChild(outputArea);

    runCodeButton.addEventListener("click", () => {
        const code = codeInput.value;
        try {
            const result = eval(code);
            outputArea.textContent = result;
        } catch (error) {
            outputArea.textContent = `Error: ${error.message}`;
        }
    });

    const contextMenuHandler = function (event) {
        event.stopPropagation();
    };

    function enableRightClick() {
        document.addEventListener('contextmenu', contextMenuHandler, true);
        document.oncontextmenu = null;
        document.body.oncontextmenu = null;
    }

    function disableRightClick() {
        document.removeEventListener('contextmenu', contextMenuHandler, true);
        document.oncontextmenu = (e) => false;
        document.body.oncontextmenu = (e) => false;
    }

    rightClickCheckbox.addEventListener("change", function () {
        if (this.checked) {
            enableRightClick();
        } else {
            disableRightClick();
        }
    });

    Object.assign(chatContainer.style, {
        position: "fixed",
        top: "50px",
        left: "50px",
        width: "650px",
        height: "475px",
        background: "white",
        border: "2px solid #ccc",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        zIndex: "99999",
        resize: "both",
        overflow: "hidden"
    });

    Object.assign(chatHeader.style, {
        background: "linear-gradient(to right, #d1d3d1, #f3f4f3)",
        padding: "10px",
        margin: "0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        userSelect: "none",
        height: "35px"
    });

    Object.assign(tabContainer.style, {
        display: "flex",
        gap: "10px"
    });

    function styleTab(tab, isActive) {
        Object.assign(tab.style, {
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
            fontFamily: "'Arial', sans-serif",
            padding: "5px 10px",
            borderBottom: isActive ? "2px solid black" : "2px solid transparent",
            transition: "border-bottom 0.2s ease-in-out"
        });
    }

    styleTab(googleTab, true);
    styleTab(chatTab, false);
    styleTab(proxyTab, false);
    styleTab(toolsTab, false);

    googleTab.addEventListener("click", () => {
        iframe.style.display = "block";
        toolsContainer.style.display = "none";
        iframe.src = "https://www.google.com/webhp?igu=1";
        styleTab(googleTab, true);
        styleTab(chatTab, false);
        styleTab(proxyTab, false);
        styleTab(toolsTab, false);
    });

    chatTab.addEventListener("click", () => {
        iframe.style.display = "block";
        toolsContainer.style.display = "none";
        iframe.src = "https://iframe.interaxai.com/67b66eb8d2fcb363116cb170";
        styleTab(googleTab, false);
        styleTab(chatTab, true);
        styleTab(proxyTab, false);
        styleTab(toolsTab, false);
    });
    
    proxyTab.addEventListener("click", () => {
        iframe.style.display = "block";
        toolsContainer.style.display = "none";
        iframe.src = "https://cartiontop.ostrovsky.sk/";
        styleTab(googleTab, false);
        styleTab(chatTab, false);
        styleTab(proxyTab, true);
        styleTab(toolsTab, false);
    });

    toolsTab.addEventListener("click", () => {
        iframe.style.display = "none";
        toolsContainer.style.display = "block";
        styleTab(googleTab, false);
        styleTab(chatTab, false);
        styleTab(proxyTab, false);
        styleTab(toolsTab, true);
    });

    Object.assign(closeButton.style, {
        background: "transparent",
        color: "black",
        border: "none",
        cursor: "pointer",
        fontSize: "20px",
        margin: "0",
        height: "25px",
        width: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        padding: "0"
    });

    closeButton.addEventListener("mouseenter", () => {
        closeButton.style.background = "rgba(0, 0, 0, 0.1)";
    });

    closeButton.addEventListener("mouseleave", () => {
        closeButton.style.background = "transparent";
    });

    Object.assign(iframe.style, {
        flexGrow: "1",
        border: "none"
    });

    closeButton.onclick = () => document.body.removeChild(chatContainer);

    let isDragging = false, offsetX, offsetY;

    chatHeader.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - chatContainer.offsetLeft;
        offsetY = e.clientY - chatContainer.offsetTop;
        chatHeader.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        chatContainer.style.left = `${e.clientX - offsetX}px`;
        chatContainer.style.top = `${e.clientY - offsetY}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        chatHeader.style.cursor = "grab";
    });

    document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key.toLowerCase() === "e") {
            chatContainer.style.display = chatContainer.style.display === "none" ? "flex" : "none";
            e.preventDefault();
        }
    });
}

createChatGPTpopup();
