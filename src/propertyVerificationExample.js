/**
 * Example usage of Karnataka Property Owner Verification APIs
 * 
 * This file demonstrates how to use the property verification functions
 * added to service.js for verifying property ownership in Karnataka state.
 */

import {
  verifyPropertyOwnerBhoomi,
  verifyPropertyOwnerBBMP,
  searchPropertyDocument
} from './service';

// Example 1: Verify property owner using Karnataka Bhoomi (Land Records)
export async function exampleBhoomiVerification() {
  console.log("Example 1: Karnataka Bhoomi Land Records Verification");
  
  const propertyDetails = {
    districtId: "01",        // Bangalore Urban district code
    talukId: "001",          // Taluk code within the district
    villageId: "0001",       // Village code within the taluk
    surveyNumber: "123",     // Survey number of the property
    hissaNumber: "1"         // Hissa number (optional)
  };

  try {
    const result = await verifyPropertyOwnerBhoomi(propertyDetails);
    
    if (result.success) {
      console.log("Property Owner Details:");
      console.log("Owner Name:", result.ownerName);
      console.log("Father's Name:", result.fatherName);
      console.log("Survey Number:", result.surveyNumber);
      console.log("Land Extent:", result.landExtent);
      console.log("Classification:", result.classification);
      console.log("Cultivation:", result.cultivation);
    } else {
      console.log("Error:", result.error);
    }
  } catch (error) {
    console.error("Verification failed:", error);
  }
}

// Example 2: Verify property owner using BBMP (for Bangalore properties only)
export async function exampleBBMPVerification() {
  console.log("Example 2: BBMP Property Tax Verification");
  
  const propertyId = "0101010100001234"; // BBMP Property ID (16-digit PID)
  // Sample IDs: 0101010100001234 (East Zone), 0301010100002345 (South Zone)

  try {
    const result = await verifyPropertyOwnerBBMP(propertyId);
    
    if (result.success) {
      console.log("Property Details:");
      console.log("Property ID:", result.propertyId);
      console.log("Owner Name:", result.ownerName);
      console.log("Address:", result.address);
      console.log("Zone:", result.zone);
      console.log("Ward:", result.ward);
      console.log("Property Type:", result.propertyType);
      console.log("Built-up Area:", result.builtUpArea);
    } else {
      console.log("Error:", result.error);
    }
  } catch (error) {
    console.error("Verification failed:", error);
  }
}

// Example 3: Search property document using KAVERI e-Registration
export async function exampleKAVERIDocumentSearch() {
  console.log("Example 3: KAVERI e-Registration Document Search");
  
  const documentDetails = {
    sroCode: "SRO001",           // Sub-Registrar Office code
    documentNumber: "12345",     // Registration document number
    year: "2023"                 // Year of registration
  };

  try {
    const result = await searchPropertyDocument(documentDetails);
    
    if (result.success) {
      console.log("Document Details:");
      console.log("Document Number:", result.documentNumber);
      console.log("Registration Date:", result.registrationDate);
      console.log("Party Details:", result.partyDetails);
      console.log("Property Details:", result.propertyDetails);
      
      // Display owner information from party details
      if (result.partyDetails && result.partyDetails.length > 0) {
        console.log("\nOwner Information:");
        result.partyDetails.forEach((party, index) => {
          console.log(`Party ${index + 1}:`);
          console.log("  Name:", party.name);
          console.log("  Role:", party.role);
          console.log("  Father's Name:", party.fatherName);
        });
      }
    } else {
      console.log("Error:", result.error);
    }
  } catch (error) {
    console.error("Document search failed:", error);
  }
}

// Example 4: Integration with existing loan verification flow
export async function verifyBorrowerProperty(borrowerDetails) {
  console.log("Example 4: Integrated Property Verification for Borrower");
  
  // Assuming borrower has provided property details
  const { propertyType, propertyId, surveyDetails } = borrowerDetails;
  
  let verificationResult = null;
  
  // Choose verification method based on property type/location
  if (propertyType === "BBMP" && propertyId) {
    // For Bangalore properties with BBMP ID
    verificationResult = await verifyPropertyOwnerBBMP(propertyId);
  } else if (propertyType === "RURAL" && surveyDetails) {
    // For rural/land properties with survey numbers
    verificationResult = await verifyPropertyOwnerBhoomi(surveyDetails);
  }
  
  if (verificationResult && verificationResult.success) {
    console.log("Property verification successful");
    console.log("Verified Owner:", verificationResult.ownerName);
    return {
      verified: true,
      ownerDetails: verificationResult
    };
  } else {
    console.log("Property verification failed");
    return {
      verified: false,
      error: verificationResult ? verificationResult.error : "Unknown error"
    };
  }
}

// Example usage in React component
export const PropertyVerificationComponent = () => {
  const handleVerifyProperty = async () => {
    // Example: Verify property when user submits property details
    const propertyDetails = {
      districtId: "01",
      talukId: "001",
      villageId: "0001",
      surveyNumber: "123",
      hissaNumber: "1"
    };

    const result = await verifyPropertyOwnerBhoomi(propertyDetails);
    
    if (result.success) {
      alert(`Property Owner: ${result.ownerName}`);
    } else {
      alert(`Verification failed: ${result.error}`);
    }
  };

  return {
    handleVerifyProperty
  };
};

// Export all examples
export default {
  exampleBhoomiVerification,
  exampleBBMPVerification,
  exampleKAVERIDocumentSearch,
  verifyBorrowerProperty,
  PropertyVerificationComponent
};
