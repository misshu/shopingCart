import * as types from './mutations_types'

export default {
  clear_local: ({
    commit
  }) => {
    commit(types.CLEAR_LOCAL)
  },
  update_local: ({
    commit
  }) => {
    commit(types.UPDATE_LOCAL)
  },
  update_cur_shop_state: ({
    commit
  }, obj) => {
    commit(types.UPDATE_CUR_SHOP_STATE, obj)
  },
  delete_db: ({
    commit
  }) => {
    commit(types.DELETE_DB)
    commit(types.UPDATE_LOCAL)
  },
  create_db: ({
    commit
  },
  {
    shop
  }) => {
    commit(types.CREATE_DB, shop)
    commit(types.UPDATE_LOCAL)
  },
  add_db: ({
    commit
  }) => {
    commit(types.ADD_DB)
    commit(types.UPDATe_LOCAl)
  }
}
