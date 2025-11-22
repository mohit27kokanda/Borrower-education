# Karnataka Property Owner Name Verification API

## Overview
This document provides information about free available APIs for property owner name verification in Karnataka state.

## 1. Karnataka Bhoomi API (Land Records)

### Description
Karnataka Bhoomi is the official land records digitization project for Karnataka state. It provides access to land records (RTC - Record of Rights, Tenancy and Crops) which includes property owner details.

### API Endpoint
**Base URL:** `https://landrecords.karnataka.gov.in/service31`

**Endpoint:** `/rtc/getRTC`

**Method:** POST

### Request Payload
```json
{
  "districtId": "string",
  "talukId": "string", 
  "villageId": "string",
  "surveyNumber": "string",
  "hissaNumber": "string"
}
```

### Request Parameters
- **districtId** (required): District code in Karnataka (e.g., "01" for Bangalore Urban)
- **talukId** (required): Taluk code within the district
- **villageId** (required): Village code within the taluk
- **surveyNumber** (required): Survey number of the property
- **hissaNumber** (optional): Hissa number for sub-divisions

### Response Format
```json
{
  "status": "success",
  "data": {
    "ownerName": "string",
    "fatherName": "string",
    "surveyNumber": "string",
    "hissaNumber": "string",
    "landExtent": "string",
    "classification": "string",
    "cultivation": "string"
  }
}
```

### Example Request
```javascript
const payload = {
  "districtId": "01",
  "talukId": "001",
  "villageId": "0001",
  "surveyNumber": "123",
  "hissaNumber": "1"
};

fetch('https://landrecords.karnataka.gov.in/service31/rtc/getRTC', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload)
})
.then(response => response.json())
.then(data => console.log(data));
```

## 2. Alternative: BBMP Property Tax API (Bangalore Only)

### Description
For properties within Bangalore Municipal Corporation limits, the BBMP Property Tax portal can be used.

### API Endpoint
**Base URL:** `https://bbmptax.karnataka.gov.in/api`

**Endpoint:** `/property/details`

**Method:** GET

### Query Parameters
- **propertyId**: BBMP Property ID (PID)

### Example
```
GET https://bbmptax.karnataka.gov.in/api/property/details?propertyId=1234567890
```

### Response Format
```json
{
  "propertyId": "string",
  "ownerName": "string",
  "address": "string",
  "zone": "string",
  "ward": "string",
  "propertyType": "string",
  "builtUpArea": "number"
}
```

## 3. KAVERI (Karnataka e-Registration) API

### Description
KAVERI provides property registration and document verification services.

### API Endpoint
**Base URL:** `https://kaverionline.karnataka.gov.in/api`

**Endpoint:** `/document/search`

**Method:** POST

### Request Payload
```json
{
  "sroCode": "string",
  "documentNumber": "string",
  "year": "string"
}
```

### Parameters
- **sroCode**: Sub-Registrar Office code
- **documentNumber**: Registration document number
- **year**: Year of registration

### Response Format
```json
{
  "documentNumber": "string",
  "registrationDate": "string",
  "partyDetails": [
    {
      "name": "string",
      "role": "SELLER/BUYER",
      "fatherName": "string"
    }
  ],
  "propertyDetails": {
    "surveyNumber": "string",
    "extent": "string",
    "location": "string"
  }
}
```

## Important Notes

1. **Authentication**: Most Karnataka government APIs require authentication or API keys for production use. Contact the respective department for API key registration.

2. **Rate Limiting**: Free tier APIs may have rate limits. Check with the department for specific limits.

3. **Data Privacy**: Ensure compliance with data privacy regulations when accessing property owner information.

4. **Testing**: Use sandbox/testing environments where available before production deployment.

5. **Alternative Access**: If direct API access is restricted, consider using the web scraping approach with official portals (ensure compliance with terms of service).

## Registration for API Access

To get API credentials:

1. **Karnataka Bhoomi**: Visit https://landrecords.karnataka.gov.in and apply for API access through the "Data Services" section
2. **BBMP**: Contact BBMP IT department at bbmp-support@karnataka.gov.in
3. **KAVERI**: Apply through https://kaverionline.karnataka.gov.in

## Contact Information

- **Karnataka Bhoomi Support**: bhoomi.support@karnataka.gov.in
- **KAVERI Support**: kaveri.helpdesk@karnataka.gov.in
- **BBMP IT Support**: bbmp-support@karnataka.gov.in

## Disclaimer

**IMPORTANT**: The API endpoints and payload structures mentioned in this document are based on publicly available information about Karnataka government services. Before production use:

1. **Verify API Endpoints**: Contact the respective government departments to confirm current API endpoints and availability
2. **Register for Access**: Most government APIs require official registration and API keys
3. **Check Terms of Service**: Ensure your use case complies with government API usage policies
4. **Test Thoroughly**: Always test in a sandbox/development environment first
5. **Stay Updated**: Government APIs may change; subscribe to official channels for updates

For official information and API access:
- Visit the respective government portals
- Contact the support emails listed above
- Check for official API documentation

The implementation provided in this repository serves as a reference architecture and should be adapted based on the actual API specifications provided by Karnataka government departments.
