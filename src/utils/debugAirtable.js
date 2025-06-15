export const debugAirtableConnection = () => {
  const config = {
    apiKeyExists: !!process.env.REACT_APP_AIRTABLE_API_KEY,
    apiKeyPrefix: process.env.REACT_APP_AIRTABLE_API_KEY?.substring(0, 3),
    baseIdExists: !!process.env.REACT_APP_AIRTABLE_BASE_ID,
    baseIdValue: process.env.REACT_APP_AIRTABLE_BASE_ID
  };

  console.table(config);
  return config;
};