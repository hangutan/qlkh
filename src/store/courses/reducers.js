const GET_LIST_COURSE ='GET_LIST_COURSE';
const GET_DETAIL_LIST_COURSES='GET_DETAIL_LIST_COURSES';
const ADD_COURSES = 'ADD_COURSES';
const DELETE_COURSE='DELETE_COURSE';
const GET_CATEGORYCOURSES="GET_CATEGORYCOURSES";
const EDIT_COURSE = 'EDIT_COURSE';
const ADD_CART='ADD_CART';
const DELETE_CART ="DELETE_CART";
const DELETE_ALL = 'DELETE_ALL';

const initState = {
    listCourses:[],
        //listCourseAdmin: [],
    cart:JSON.parse(localStorage.getItem("cart")),
        // filterListCourse: [],
    courses: {},
    danhmuckhoahoc: [],
        // courseCard: "courseCard",
        // courseSoft: "Best Courses",
    editCourse: {},
        // catalogCourse: []
}

const listCourses = (state = initState,action)=>{
    
    switch(action.type){
        case GET_LIST_COURSE : 
            return {
                ...state,
                listCourses:[...action.payload]
            }
        case GET_DETAIL_LIST_COURSES:
            return{
                ...state,
                courses:action.payload.courses
            }
        case ADD_COURSES:
            return{
                ...state,
                listCourses:[
                    ...listCourses,
                    action.courses
                ]
            }
        case DELETE_COURSE:
            const listCoursesDel = listCourses.filter(item=>{
                return item.maKhoaHoc !== action.payload
            })
            return{
                ...state,
                listCourses :listCoursesDel
            }
        case GET_CATEGORYCOURSES:
            return{
                ...state,
                danhmuckhoahoc:action.payload
            }
        case EDIT_COURSE:
            return {
                ...state,
                editCourse:action.payload
            }
        case ADD_CART:
            console.log(action.payload);
            if(state.cart.length === 0){
                state.cart = [...state.cart,action.payload]
            }else{
                let id = state.cart.findIndex(item=>{
                    return item.maKhoaHoc === action.payload.maKhoaHoc
                })
                if(id===-1){
                    state.cart =[...state.cart,action.payload]
                }
            }
            console.log(state.cart);
            localStorage.setItem("cart",JSON.stringify(state.cart));
            return{...state}
        case DELETE_CART:
            let cartNew = state.cart.filter(item=>{
                return item.maKhoaHoc !== action.payload.maKhoaHoc
            })
            console.log("Xóa ",cartNew);
            localStorage.setItem("cart",JSON.stringify(cartNew));
            return {
                ...state,
                cart:cartNew
            }
        case DELETE_ALL:
            const cartDelAll = [];
            localStorage.setItem('cart',JSON.stringify(cartDelAll));
            return{
                ...state,
                cart:cartDelAll
            }
        default:
            return state;
    }

    
}

export default listCourses;