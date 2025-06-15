export const checkEnvVariables = () => {
  console.log('Environment Variables Check:');
  console.log('API Key exists:', !!process.env.REACT_APP_AIRTABLE_API_KEY);
  console.log('API Key:', process.env.REACT_APP_AIRTABLE_API_KEY?.substring(0, 6) + '...');
  console.log('Base ID exists:', !!process.env.REACT_APP_AIRTABLE_BASE_ID);
  console.log('Base ID:', process.env.REACT_APP_AIRTABLE_BASE_ID);
};