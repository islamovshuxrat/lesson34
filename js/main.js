const putTask = async () => {
    try {
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/todos?_limit=4`
        )
        return res.data
    } catch (error) {
        console.error("xatolik bor");
    }
};
const post = putTask()
post.then((data) => {
    console.log(data);

    const list = document.getElementById("list");
    list.innerHTML = "";

    data.map((v) => {
        const div = document.createElement("ul");
        div.className = " p-0 shadow";
        div.innerHTML = `   <li status="inactive" id="task1"
                    class="list-group-item d-flex justify-content-between align-items-center">
                    ${v.id} ${v.title}
                    <div>
                        ${v.completed && '<i class="fas fa-check-circle text-success"></i>' || ""} 
                        <button
                            class="btn btn-primary mr-2">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-danger">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </li> `;
        list.appendChild(div);
    });
});

// post

const inputId = document.getElementById("inputid").value;


const postTask = () => {
    const inputId = document.getElementById("inputid").value;
    axios.post(`https://jsonplaceholder.typicode.com/todos`, {
        title: inputId,
        completed: false,
        userId: 1,
    })
        .then((res) => {
            console.log(res);
            alert("muvafaqiyatli  ulandi");

        });
};
// aaaaaa

let lastObj = {};



const editTask = async () => {
    try {
        const res = await axios.put(`${url}/${lastObj.id}`, {
            title: inputId,
            userId: lastObj.userId,
            completed: lastObj.completed,
        });
        if (res.status == 200) alert("muvaffaqiyatli o'zgartirildi");
        setTodos();
    } catch (error) {
        console.error("Xatolik yuz berdi: " + error);
        alert("Xatolik yuz berdi");
    }
};

const deleteTask = async (id) => {
    try {
        const res = await axios.delete(`${url}/${id}`);
        console.log(res);
    } catch (error) {
        console.error("Xatolik yuz berdi: " + error);
        alert("Xatolik yuz berdi");
    }
};