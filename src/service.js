const endpoint = "https://3db6-14-194-19-186.in.ngrok.io"

export function getUser(mobileNumber){
  const url = new URL(`${endpoint}/notice/user`)

  const queryParams = {
    'mobile_number': mobileNumber
  }

  addQueryParams(url, queryParams)

  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      mode: 'no-cors',
      'ngrok-skip-browser-warning': 1

    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (Object.keys(data).length) return data
      return {};
    })
    .catch(handleError({}));
}

export function createUser(mobileNumber, panNumber){
  const url = new URL(`${endpoint}/notice/user`)

  const body = {
    'mobile_number': mobileNumber,
    'pan_number': panNumber
  }

  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      mode: 'no-cors',
      'ngrok-skip-browser-warning': 1

    },
    body: JSON.stringify(body)
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (data.message == "success") return data.data
      return {};
    })
    .catch(handleError({}));
}

export function getLoans(userId){
  const url = new URL(`${endpoint}/notice/all-loans`)

  const queryParams = {
    'user_id': userId
  }
  addQueryParams(url, queryParams)

  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      mode: 'no-cors',
      'ngrok-skip-browser-warning': 1
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (data.message == "success") return data
      return {};
    })
    .catch(handleError({}));
}

export function addQueryParams(url, params) {
  for (const [key, value] of Object.entries(params))
    ![undefined, null].includes(value) && url.searchParams.set(key, value);
}

export function handleError(returnValue) {
  return (error) => {
    console.error(error);
    return returnValue;
  };
}