function myFunction() {
  
 var hidukenow=new Date();
  Logger.log(hidukenow)
  //日付とるやーつ
  
  var dtA = new Date('hidukenow 19:00:10');
  Logger.log(dtA)
  //日時指定するやーつ

 var spreadsheet = SpreadsheetApp.openById('1TSMaQgFgbsBVZlevdQ6wFnU87v6Z2K77Zuha4N3NUSA');  //このスプレッドシート開いてねってやーつ
 var sheet = spreadsheet.getSheetByName('メール送信リスト');　　//このシート開いてねってやーつ
 
 
 var lastRowNumber = sheet.getLastRow();　　//sheet.getLastRow()ではシート全体から最終行番号を返してくる？が、Range.getLastRowは指定されたセル範囲からデータが入っているかどうかは関係なく最後の行番号を返してくるらしい。
 var range = sheet.getRange(2,1,lastRowNumber,10).getValues();　　//rangeはstring型。セルの番地(C3、のような)を指定する。  //range.getValuesは、値を二重配列で取得?
 Logger.log(range[0])


 for(var i =2; i <= lastRowNumber; i++){
   var emailTo = sheet.getRange(i,2).getValues();
   var subject = sheet.getRange(i,3).getValues();
   var send_datetime = sheet.getRange(i,4).getValues();
   var sent_datetime = sheet.getRange(i,5).getValues();
   
   if (send_datetime <= dtA && sent_datetime === ""){
    var email_body = generateMailText(i,subject);
    sendMail(emailTo,subject,email_body)
    sheet.getRange(i,5).setValue(today);
    }
    }
    
function generateMailText(index, subject) {
  var doc = DocumentApp.openById("1PfahKkaFAec6zWtehdoYvuWDrYYvItntsRJsepke8Fc");
  var docText = doc.getBody().getText();  
  var name = mySheet.getRange(index, 1).getValue();
  var emailBody = docText.replace(/{名前}/g, name)
                         
  return emailBody
}
 
  if(hidukenow>dtA){
 //現在時刻がリマインドしたい時刻を超えたら
 
  /* メールを送信 */
  
  //メール取得したい
  
function searchContactMail(){
  var strTerms = 'label:all';
  var numMailMax = 500;
  var numMail = 300;
  var myThreads;
  var maMsgs;
  var valMsgs;
  
  var i = SpreadsheetApp.getActiveSheet().getLastRow();
  
  if(i<numMailMax) {
    valMsgs = [];
    myThreads = GmailApp.search(strTerms,i,numMail);
    myMsgs = GmailApp.getMessagesForThreads(myThreads);
    
    for(var j = 0;j < myMsgs.length;j++){
      valMsgs[j] = [];
      valMsgs[j][0] = myMsgs[j][0].getFrom();
      valMsgs[j][1] = myMsgs[j][0].getReplyTo();
      valMsgs[j][2] = myMsgs[j][0].getTo();
      valMsgs[j][3] = myMsgs[j][0].getDate();
      valMsgs[j][4] = myMsgs[j][0].getSubject();
    }
    
    if(MyMsgs.length>0){
       SpreadsheetApp.getActiveSheet().getRange(i + 1, 1, j, 5).setValues(valMsgs)
  
  
 
  function sendMail(emailTo, subject, email_body) {
    var title = subject + "の件について"
    var emailFrom = "yamato.shogo@di-v.co.jp"
    var sender = "大和省悟"  
  
    GmailApp.sendEmail(
      emailTo,
      subject,
      email_body,
      {
        from: emailFrom,
        name: sender
     　 }
   　 )
  　}
　}
　}
　} 
} 
}

