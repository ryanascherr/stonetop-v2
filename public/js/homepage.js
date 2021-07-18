const playbook = $(".playbook");
// let playbookName = $(this).data("name");


// playbook.click(function(e) {
//     let playbookName = $(this).data("name");
//     localStorage.setItem("playbook", playbookName);
//     getPlaybookName(playbookName);
// })

// const getPlaybookName = async (playbookName) => {
//     const response = await fetch('/background', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ "playbookName": playbookName })
//     });
//     console.log(playbookName);

//     if (response.ok) {
//         console.log("You did it!");
//       } else {
//         alert(response.statusText);
//       }
// }