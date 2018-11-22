const storageAlias = (storage) => {
  return {
    get: (key) => {
      var val = storage ? storage.getItem(key) : null
      if (!val || val === 'null') return null
      try {
        val = JSON.parse(val)
      } catch (e) {}
      return val
    },
    set: (key, val) => {
      var _val = val
      if (typeof _val === 'undefined') _val = val = null
      if (typeof val !== 'string') {
        try {
          _val = JSON.stringify(val).replace(/,"\$\$hashKey":.*?(,|})/, '$1')
        } catch (e) {}
      }
      try {
        storage.setItem(key, _val)
      } catch (e) {}
      return val
    },
    getSet: (key, val) => {
      var me = this
      var _val = me.get(key)
      setTimeout(() => {
        if (!_val) {
          me.set(key, val)
          try {
            _val = JSON.parse(val)
          } catch (e) {}
        }
      })
      return val
    },
    del: (key) => {
      storage.removeItem(key)
    }
  }
}
export default {
  setCookie: (name, value, expires, path, domain, secure) => {
    // set Time, it's in milliseconds
    let today = new Date()
    today.setTime(today.getTime())
    let expiresDate = ''
    if (expires && !(expires instanceof Date)) {
      expires = expires * 1000 * 60 * 60 * 24
      expiresDate = new Date(today.getTime() + expires)
    } else {
      expiresDate = expires || today
    }
    let x = name + '=' + escape(value) + ((expires) ? ';expires=' + expiresDate.toGMTString() : '') + ((path) ? ';path=' + path : '') + ((domain) ? ';domain=' + domain : '') + ((secure) ? ';secure' : '')
    document.cookie = x
  },
  getCookie: (name) => {
    let res = new RegExp('(^| )' + name + '=([^;]*)(;|$)').exec(document.cookie)
    return res && res[2]
  },
  ls: storageAlias(localStorage),
  ss: storageAlias(sessionStorage)
}
