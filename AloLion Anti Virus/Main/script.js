document.getElementById("downloadBtn").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "Download/Why can't we just talk about the economic state of the U.S.... Like what_!_!_.docx"; // Change path if needed for new software -
    link.download = "Why can't we just talk about the economic state of the U.S.... Like what_!_!_.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
