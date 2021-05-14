
RUN git clone https://github.com/kappithannemo/cowin-ii /root/cowin-ii
WORKDIR /root/cowin-ii/
RUN npm install 


CMD ["npm run start"]
