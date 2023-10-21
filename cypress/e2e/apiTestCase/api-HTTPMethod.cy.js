describe('Movie DB Api Call Testing', () => {
    let guest_Session_ID, request_Token
    
    it('TC-01 GET Guest Session ID', () => {
        cy.request({
                method : 'GET',
                url : 'https://api.themoviedb.org/3/authentication/guest_session/new?',
                qs : {api_key: '650eb9dcf0de209e4e8f467a2aea421e'}
        })

        .then ( (response) => {
            expect(response.status).to.eq(200);
            expect(response.body.success).to.eq(true)
            guest_Session_ID = response.body.guest_session_id;
            cy.log(guest_Session_ID);
           // expect(response.body.guest_session_id).to.eq('62ee8f62121afee0c011621bcb1589d8')

        })
    
      }),

      it('TC-02 GET Request Token', () => {
        cy.request({
                method : 'GET',
                url : 'https://api.themoviedb.org/3/authentication/token/new?',
                qs : {api_key: '650eb9dcf0de209e4e8f467a2aea421e'}
        })

        .then ( (response) => {
            expect(response.status).to.eq(200);
            expect(response.body.success).to.eq(true)
            request_Token = response.body.request_token;
            cy.log(request_Token);

        })
    
      }),

      it('TC-03 POST Session Login', () => {
        cy.request({
                method : 'POST',
                url : 'https://api.themoviedb.org/3/authentication/token/validate_with_login?',
                qs : {api_key: '650eb9dcf0de209e4e8f467a2aea421e'},
                body:{
                        username: "natasatech",
                        password: "S@angeetha123",
                        request_token: request_Token
                      }
        })

        .then ( (response) => {
            expect(response.status).to.eq(200);
            expect(response.body.success).to.eq(true)
            request_Token = response.body.request_token;
            cy.log(request_Token);

        })
    
      })
    
})