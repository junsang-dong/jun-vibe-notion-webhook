exports.handler = async (event, context) => {
  // POST 요청만 허용
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    // 노션에서 보낸 데이터
    const notionData = JSON.parse(event.body);
    
    console.log('Notion webhook received:', notionData);
    
    // 여기서 데이터 처리 로직 구현
    // 예: 데이터베이스 저장, 이메일 발송 등
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Webhook received successfully' })
    };
  } catch (error) {
    console.error('Webhook error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' })
    };
  }
};