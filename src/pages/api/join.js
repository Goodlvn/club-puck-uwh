// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { google } from "googleapis";

export default (req, res) => {

  const SCOPES = [
    "https://www.googleapis.com/auth/contacts",
    "https://www.googleapis.com/auth/admin.directory.group"
  ]

  const sendFrom = "admin@clubpuck.com"

  const client = new google.auth.JWT(
    process.env.client_email,
    null,
    process.env.private_key,
    SCOPES,
    sendFrom
  );


  client.authorize((err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      getData(client);
    }
  })

  const getData = async (client) => {

    const lib = google.admin({ version: "directory_v1", auth: client });

    const res = await lib.members.insert({
      groupKey: "newplayers@clubpuck.com",
      requestBody: {
        email: "james@yahoo.com",
        role: "MEMBER",
        type: "USER",
      }
    });

    console.log(res);
  }

  res.status(200).json({
    status: 'success',
  })
}
