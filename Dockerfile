
RUN git clone https://github.com/kappithannemo/cowin-ii /root/cowin-ii
WORKDIR /root/cowin-ii/
ENV TZ=Europe/Istanbul
RUN npm install 


CMD ["npm run start"]
