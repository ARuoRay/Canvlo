/**
 * WEB API TodoList Rest CRUD
 * ------------------------------------------------------------
 * GET    "http://localhost:8080/todolist/"     獲取所有待辦事項
 * POST   "http://localhost:8080/todolist/"     資料送後台待辦事項
 * PUT    "http://localhost:8080/todolist/{id}" 更新待辦事項
 * DELETE "http://localhost:8080/todolist/{id}" 刪除待辦事項
 * ------------------------------------------------------------
 * */
const BASE_URL = 'http://localhost:8089/chat';

// 獲取聊天紀錄
export const getAllTodos = async(roomId) => {
    const token = localStorage.getItem('jwtToken');
    const response = await fetch(`${BASE_URL}/${roomId}`,{
        headers: {
            'Authorization': `Bearer ${token}`  // 在標頭中加上 JWT
        }
    });
     const result = await response.json();
    if (result.status === 200) {
        return result.data; // 返回資料
    }
    throw new Error(result.message);
};

// 獲取個人資料
export const getProfileTodo = async() => {
    const token = localStorage.getItem('jwtToken');
    const response = await fetch(BASE_URL, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    const result = await response.json();
    if (result.status === 200) {
        return result.data; // 返回資料 json 給 then(json) 接收
    }
    throw new Error(result.message);
};

// 獲取房間所有訊息
export const getChatTodo = async(roomId) => {
    const token = localStorage.getItem('jwtToken');
    const response = await fetch(`${BASE_URL}/${roomId}/profile`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    const result = await response.json();
    if (result.status === 200) {
        return result.data; // 返回資料 json 給 then(json) 接收
    }
    throw new Error(result.message);
};

