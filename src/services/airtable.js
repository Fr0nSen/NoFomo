import Airtable from 'airtable';

const base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY
}).base(process.env.REACT_APP_AIRTABLE_BASE_ID);

// Function to fetch trends
export const getTrends = async () => {
  try {
    console.log('Fetching trends...');
    const records = await base('Trends db').select({
      view: 'Grid view'
    }).all();
    
    console.log('Raw records:', records);
    
    const mappedRecords = records.map(record => ({
      id: record.id,
      title: record.fields.Trend_Name || '',
      category: record.fields.Category || 'Uncategorized', // Provide default
      description: record.fields.Description || '',
      explanation: record.fields.Explanation || '',
      image: record.fields.Image?.[0]?.url || '',
      engagement: record.fields.Engagement || 0
    }));
    
    console.log('Mapped records:', mappedRecords);
    return mappedRecords;
  } catch (error) {
    console.error('Airtable fetch error:', error);
    throw error;
  }
};

// Function to add new users
export const addUser = async (userData) => {
  try {
    const cleanEmail = userData.email.replace(/"/g, '');
    
    const records = await base('Users').create([
      {
        fields: {
          Username: userData.username,
          Email: cleanEmail,
          JoinDate: new Date().toISOString().split('T')[0]
        }
      }
    ]);
    return records;
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};