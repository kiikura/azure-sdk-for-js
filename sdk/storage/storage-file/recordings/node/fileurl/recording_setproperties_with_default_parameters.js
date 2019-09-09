let nock = require('nock');

module.exports.testInfo = {"share":"share156775318030807373","dir":"dir156775318073406412","file":"file156775318114205023"}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156775318030807373')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Fri, 06 Sep 2019 06:59:40 GMT',
  'ETag',
  '"0x8D73297C9F47740"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '1956c9ac-901a-0075-3880-649caf000000',
  'x-ms-client-request-id',
  '8617b44d-c665-4031-bc46-0742b2c4432e',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Fri, 06 Sep 2019 06:59:39 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156775318030807373/dir156775318073406412')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Fri, 06 Sep 2019 06:59:41 GMT',
  'ETag',
  '"0x8D73297CA33F0F3"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'a5e42d2c-901a-0137-2580-64db22000000',
  'x-ms-client-request-id',
  '1778f526-9335-42c9-bbed-eb2252486ecf',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-06T06:59:41.0066675Z',
  'x-ms-file-last-write-time',
  '2019-09-06T06:59:41.0066675Z',
  'x-ms-file-creation-time',
  '2019-09-06T06:59:41.0066675Z',
  'x-ms-file-permission-key',
  '1237041589013461953*8787082347076103240',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '13835128424026341376',
  'x-ms-file-parent-id',
  '0',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Fri, 06 Sep 2019 06:59:40 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156775318030807373/dir156775318073406412/file156775318114205023')
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Fri, 06 Sep 2019 06:59:41 GMT',
  'ETag',
  '"0x8D73297CA732C34"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'dbb8e10b-301a-007c-8080-64d97c000000',
  'x-ms-client-request-id',
  '724d00ba-0871-4d8a-a2ee-e0c8b9114a40',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-06T06:59:41.4210612Z',
  'x-ms-file-last-write-time',
  '2019-09-06T06:59:41.4210612Z',
  'x-ms-file-creation-time',
  '2019-09-06T06:59:41.4210612Z',
  'x-ms-file-permission-key',
  '15082859266781889734*8787082347076103240',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Fri, 06 Sep 2019 06:59:40 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156775318030807373/dir156775318073406412/file156775318114205023')
  .query(true)
  .reply(200, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Fri, 06 Sep 2019 06:59:41 GMT',
  'ETag',
  '"0x8D73297CAB1078D"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'd523587c-101a-006b-3c80-647077000000',
  'x-ms-client-request-id',
  '51303ae0-f1e0-4955-8131-0e6a7e576ed9',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-06T06:59:41.8264461Z',
  'x-ms-file-last-write-time',
  '2019-09-06T06:59:41.4210612Z',
  'x-ms-file-creation-time',
  '2019-09-06T06:59:41.4210612Z',
  'x-ms-file-permission-key',
  '15082859266781889734*8787082347076103240',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Fri, 06 Sep 2019 06:59:41 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .head('/share156775318030807373/dir156775318073406412/file156775318114205023')
  .reply(200, "", [ 'Content-Length',
  '11',
  'Last-Modified',
  'Fri, 06 Sep 2019 06:59:41 GMT',
  'ETag',
  '"0x8D73297CAB1078D"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'd4fa557a-501a-00c3-5080-64eed9000000',
  'x-ms-client-request-id',
  '6ce680f1-58ee-471f-b039-90ad15341c60',
  'x-ms-version',
  '2019-02-02',
  'x-ms-type',
  'File',
  'x-ms-server-encrypted',
  'true',
  'x-ms-file-change-time',
  '2019-09-06T06:59:41.8264461Z',
  'x-ms-file-last-write-time',
  '2019-09-06T06:59:41.4210612Z',
  'x-ms-file-creation-time',
  '2019-09-06T06:59:41.4210612Z',
  'x-ms-file-permission-key',
  '15082859266781889734*8787082347076103240',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Last-Modified,ETag,x-ms-type,x-ms-server-encrypted,x-ms-file-change-time,x-ms-file-last-write-time,x-ms-file-creation-time,x-ms-file-permission-key,x-ms-file-attributes,x-ms-file-id,x-ms-file-parent-id,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Fri, 06 Sep 2019 06:59:41 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share156775318030807373')
  .query(true)
  .reply(202, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '04947336-501a-008e-2480-642135000000',
  'x-ms-client-request-id',
  '5dd17790-d53e-46cf-b05e-003c7efea2e9',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Fri, 06 Sep 2019 06:59:41 GMT',
  'Connection',
  'close' ]);
