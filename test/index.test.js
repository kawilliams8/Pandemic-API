import { expect, server, BASE_URL } from './setup';

describe('Index', () => {
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

describe('About', () => {
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

describe('Messages page test', () => {
});

describe('Messages', () => {
  const mockMessages = [
    { name: 'chidimo', message: 'first message' },
    { name: 'orji', message: 'second message' },
  ];
  //My test
  it('gets messages page 1', (done) => {
    server
      .get(`${BASE_URL}/messages`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.messages).to.deep.equal(mockMessages);
        done();
      });
  });

  //Tutorial test
  it('get messages page 2', (done) => {
    server
      .get(`${BASE_URL}/messages`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.messages).to.be.instanceOf(Array);
        res.body.messages.forEach((m) => {
          expect(m).to.have.property('name');
          expect(m).to.have.property('message');
        });
        done();
      });
  });
});