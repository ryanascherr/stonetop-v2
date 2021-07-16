const playbook = $(".playbook");

playbook.click(function(e) {
    let playbookName = $(this).data("name");
    localStorage.setItem("playbook", playbookName);
})