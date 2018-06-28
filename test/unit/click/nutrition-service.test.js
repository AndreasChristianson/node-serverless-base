import request from 'request';

jest.mock('request');

describe('jest', ()=>{
    it('should run tests',()=>{
        expect(1).toBe(1);
    })
});
