import * as types from '../mutation-types'

/* 通用配置 */
const state = {
	commonObj:(localStorage.getItem('commonObj') || null ),
}

const actions = {
	setCommonObjState({ commit }, status) {
		localStorage.setItem('commonObj',JSON.stringify(status) );
        commit(types.COMMON_OBJ_STATE, status)
    },
}

const getters = {
	commonObj: state => state.commonObj,
}

const mutations = {
	[types.COMMON_OBJ_STATE](state,status){
		state.commonObj = status;
		console.dir(state.commonObj)
	},
	
}

export default {
    state,
    actions,
    getters,
    mutations
}
