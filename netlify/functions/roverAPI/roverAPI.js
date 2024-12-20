const handler = async (event) => {
  try {
    const apiKEY = process.env.NASA_API_KEY;
    const date = event.queryStringParameters.date;
    const response  = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&
      api_key=${apiKEY}`
    );
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
