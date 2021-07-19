const playbook = $(".playbook");
let playbookName = $(this).data("name");


playbook.click(function(e) {
    let playbookName = $(this).data("name");
    localStorage.setItem("playbook", playbookName);
    getPlaybookName(playbookName);
})

const getPlaybookName = async (playbookName) => {
    const response = await fetch(`/background/${playbookName}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
    });
    console.log(playbookName);

    if (response.ok) {
        console.log("You did it!");
      } else {
        alert(response.statusText);
      }
}