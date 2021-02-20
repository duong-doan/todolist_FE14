// default reducer
// Note: You can remove this reducer and create your own reducer

import {
  CLICK_CREATE,
  SUBMIT_CREATE_TASK,
  CLICK_TASK,
  SUBMIT_EDIT_TASK,
  CLICK_NEW_SIDEBAR,
  CLICK_DOING_SIDEBAR,
  CLICK_DONE_SIDEBAR,
  RESET_FORM_EDIT,
  DELETE_FORM_EDIT,
  SUBMIT_FORM_SEARCH
} from '../actions/createTask';

const initialState = {
  DATA: [
    {
      id: 0,
      title: 'task 1',
      creator: 'doan',
      status: 'new',
      description: 'this is a task,this is a task task,this is a task task,this is a task task,this is a task task,this is a task task,this is a task,',
    }, {
      id: 1,
      title: 'task 2',
      creator: 'doan',
      status: 'doing',
      description: 'this is a task,this is a task task,this is a task task,this is a task task,this is a task task,this is a task task,this is a task,',
    }, {
      id: 2,
      title: 'task 3',
      creator: 'doan',
      status: 'new',
      description: 'this is a task,this is a task task,this is a task task,this is a task task,this is a task task,this is a task task,this is a task,',
    }, {
      id: 4,
      title: 'task 5',
      creator: 'doan',
      status: 'done',
      description: 'this is a task,this is a task task,this is a task task,this is a task task,this is a task task,this is a task task,this is a task,',
    }, {
      id: 5,
      title: 'task 6',
      creator: 'doan',
      status: 'doing',
      description: 'this is a task,this is a task task,this is a task task,this is a task task,this is a task task,this is a task task,this is a task,',
    }, {
      id: 6,
      title: 'task 6',
      creator: 'doan',
      status: 'doing',
      description: 'this is a task,this is a task task,this is a task task,this is a task task,this is a task task,this is a task task,this is a task,',
    },
    {
      id: 7,
      title: 'task 6',
      creator: 'doan',
      status: 'doing',
      description: 'this is a task,this is a task task,this is a task task,this is a task task,this is a task task,this is a task task,this is a task,',
    }, {
      id: 8,
      title: 'task 6',
      creator: 'doan',
      status: 'doing',
      description: 'this is a task,this is a task task,this is a task task,this is a task task,this is a task task,this is a task task,this is a task,this is a task,this is a task,this is a task,this is a task,',
    }, {
      id: 9,
      title: 'task 6',
      creator: 'doan',
      status: 'doing',
      description: 'this is a task,this is a task task,this is a task task,this is a task task,this is a task task,this is a task task,this is a task,',
    },
  ],
  target: '',
  resetForm: false,
  idTask: '',
  title: '',
  creator: '',
  status: '',
  description: '',
  isSearch: false,
  arrNewTask: [],
  arrDoingTask: [],
  arrDoneTask: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CLICK_CREATE:
      return {
        ...state,
        target: 'create'
      };

    case SUBMIT_CREATE_TASK:
      return {
        DATA: [
          ...state.DATA.concat({
            id: state.DATA.length,
            title: action.value.title,
            creator: action.value.creator,
            status: 'new',
            description: action.value.desc
          })
        ],
        target: ''
      }

    case CLICK_TASK:
      console.log(action.value)
      return {
        ...state,
        target: 'edit',
        idTask: action.value.id,
        title: action.value.title,
        creator: action.value.creator,
        description: action.value.description,
        status: action.value.status
      }

    case SUBMIT_EDIT_TASK:
      console.log(state);
      const newData = [...state.DATA]
      const index = newData.findIndex(x => x.id === state.idTask);
      newData[index].title = action.value.title;
      newData[index].creator = action.value.creator;
      newData[index].description = action.value.desc;
      newData[index].status = action.value.status;
      return {
        ...state,
        DATA: newData,
        target: 'create',
        resetForm: false,
      }

    case CLICK_NEW_SIDEBAR:
      const newDataTask = [...state.DATA]
      const taskNew = newDataTask.filter(x => x.status === 'new')
      console.log(taskNew);
      return {
        ...state,
        target: 'new',
        arrNewTask: taskNew,
      }

    case CLICK_DOING_SIDEBAR:
      const doingDataTask = [...state.DATA]
      const taskDoing = doingDataTask.filter(x => x.status === 'doing')
      return {
        ...state,
        arrDoingTask: taskDoing,
      }

    case CLICK_DONE_SIDEBAR:
      const doneDataTask = [...state.DATA]
      const taskDone = doneDataTask.filter(x => x.status === 'done')
      return {
        ...state,
        arrDoneTask: taskDone,
      }

    case RESET_FORM_EDIT:
      // console.log(state);
      return {
        ...state,
        resetForm: true,
        target: 'edit',
        title: '',
        creator: '',
        description: '',
        status: ''
      }

    case DELETE_FORM_EDIT:
      const newDataDelete = [...state.DATA]
      const indexTask = newDataDelete.findIndex(x => x.id === state.idTask)
      newDataDelete.splice(indexTask, 1)
      console.log(newDataDelete);
      return {
        ...state,
        DATA: newDataDelete,
        target: ''
      }

    case SUBMIT_FORM_SEARCH:
      const newDataFormSearch = [...state.DATA]
      const itemTaskSearch = newDataFormSearch.filter(val => {
        if (val.title.toLowerCase().includes(action.value.value.toLowerCase()) || val.creator.toLowerCase().includes(action.value.value.toLowerCase())) {
          console.log(val);
          return val
        }
      })
      console.log(itemTaskSearch);
      return {
        ...state,
        dataSearchForm: itemTaskSearch,
        searchBox: action.value.value,
        isSearch: true
      }

    default:
      return {
        ...state
      };
  }
}