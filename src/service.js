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

export function getLoanDetails(loanId){
  const url = new URL(`${endpoint}/notice/loan-details`)

  const queryParams = {
    'loan_id': loanId
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
      if (data.message == "success") return data["data"]
      return {};
    })
    .catch(handleError({}));
}

export function getLoanBreakdown(loanId, userId){
  const url = new URL(`${endpoint}/notice/get-loan-breakdown`)

  const queryParams = {
    'loan_id': loanId,
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
      if (data.message == "success") return data["data"]
      return [];
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

// Karnataka Property Owner Verification API

// Karnataka Bhoomi Land Records API endpoint
const bhoomiBASE_URL = "https://landrecords.karnataka.gov.in/service31";

/**
 * Verify property owner using Karnataka Bhoomi Land Records
 * @param {Object} propertyDetails - Property identification details
 * @param {string} propertyDetails.districtId - District code
 * @param {string} propertyDetails.talukId - Taluk code
 * @param {string} propertyDetails.villageId - Village code
 * @param {string} propertyDetails.surveyNumber - Survey number
 * @param {string} propertyDetails.hissaNumber - Hissa number (optional)
 * @returns {Promise<Object>} Property owner details
 */
export function verifyPropertyOwnerBhoomi(propertyDetails) {
  // Validate required parameters
  if (!propertyDetails || !propertyDetails.districtId || !propertyDetails.talukId || 
      !propertyDetails.villageId || !propertyDetails.surveyNumber) {
    return Promise.resolve({ 
      success: false, 
      error: "Missing required parameters: districtId, talukId, villageId, and surveyNumber are required" 
    });
  }

  const url = `${bhoomiBASE_URL}/rtc/getRTC`;

  const payload = {
    districtId: propertyDetails.districtId,
    talukId: propertyDetails.talukId,
    villageId: propertyDetails.villageId,
    surveyNumber: propertyDetails.surveyNumber,
    hissaNumber: propertyDetails.hissaNumber || ""
  };

  return fetch(url, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (data.status === "success" && data.data) {
        return {
          success: true,
          ownerName: data.data.ownerName,
          fatherName: data.data.fatherName,
          surveyNumber: data.data.surveyNumber,
          hissaNumber: data.data.hissaNumber,
          landExtent: data.data.landExtent,
          classification: data.data.classification,
          cultivation: data.data.cultivation
        };
      }
      return { success: false, error: "Property details not found" };
    })
    .catch(handleError({ success: false, error: "API request failed" }));
}

// BBMP Property Tax API endpoint (for Bangalore properties)
const bbmpBASE_URL = "https://bbmptax.karnataka.gov.in/api";

/**
 * Verify property owner using BBMP Property Tax records (Bangalore only)
 * @param {string} propertyId - BBMP Property ID (PID)
 * @returns {Promise<Object>} Property owner details
 */
export function verifyPropertyOwnerBBMP(propertyId) {
  // Validate required parameter
  if (!propertyId || propertyId.trim() === "") {
    return Promise.resolve({ 
      success: false, 
      error: "Missing required parameter: propertyId is required" 
    });
  }

  const url = new URL(`${bbmpBASE_URL}/property/details`);

  const queryParams = {
    propertyId: propertyId
  };

  addQueryParams(url, queryParams);

  return fetch(url, {
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (data && data.propertyId) {
        return {
          success: true,
          propertyId: data.propertyId,
          ownerName: data.ownerName,
          address: data.address,
          zone: data.zone,
          ward: data.ward,
          propertyType: data.propertyType,
          builtUpArea: data.builtUpArea
        };
      }
      return { success: false, error: "Property not found" };
    })
    .catch(handleError({ success: false, error: "API request failed" }));
}

// KAVERI e-Registration API endpoint
const kaveriBASE_URL = "https://kaverionline.karnataka.gov.in/api";

/**
 * Search property document using KAVERI e-Registration
 * @param {Object} documentDetails - Document search details
 * @param {string} documentDetails.sroCode - Sub-Registrar Office code
 * @param {string} documentDetails.documentNumber - Registration document number
 * @param {string} documentDetails.year - Year of registration
 * @returns {Promise<Object>} Document and property details
 */
export function searchPropertyDocument(documentDetails) {
  // Validate required parameters
  if (!documentDetails || !documentDetails.sroCode || 
      !documentDetails.documentNumber || !documentDetails.year) {
    return Promise.resolve({ 
      success: false, 
      error: "Missing required parameters: sroCode, documentNumber, and year are required" 
    });
  }

  const url = `${kaveriBASE_URL}/document/search`;

  const payload = {
    sroCode: documentDetails.sroCode,
    documentNumber: documentDetails.documentNumber,
    year: documentDetails.year
  };

  return fetch(url, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (data && data.documentNumber) {
        return {
          success: true,
          documentNumber: data.documentNumber,
          registrationDate: data.registrationDate,
          partyDetails: data.partyDetails,
          propertyDetails: data.propertyDetails
        };
      }
      return { success: false, error: "Document not found" };
    })
    .catch(handleError({ success: false, error: "API request failed" }));
}