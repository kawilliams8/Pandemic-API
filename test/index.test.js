import { expect, server, BASE_URL } from './setup';

describe('Index page test', () => {
  it('gets base url', (done) => {
    server
      .get(`${BASE_URL}/`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal(
          "Environment variable is coming across."
        );
        done();
      });
  });
});

describe('About page test', () => {
  it('gets about url', (done) => {
    server
      .get(`${BASE_URL}/about`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('About Page');
        done();
      });
  });
});

// describe('Messages page test', () => {
//   const mockResponse = [
//     { name: 'chidimo', message: 'first message' },
//     { name: 'orji', message: 'second message' },
//   ];

//   it('gets Messages url', (done) => {
//     server
//       .get(`${BASE_URL}/messages`)
//       .expect(200)
//       .end((err, res) => {
//         expect(res.status).to.equal(200);
//         expect(res.body.message).to.equal(mockResponse);
//         done();
//       });
//   });
// });
