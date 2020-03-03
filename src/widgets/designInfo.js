import Todo from './todo';export default [ {meta: {"widgetName":"Todo","title":"待办组件","desc":"组件描述信息","props":{"data":{"type":"Object[]","desc":"待办数据","propsDefaultValue":{"title":"待办事项","description":"描述信息","buttonText":"添加"},"meta":[{"key":"title","title":"组件内标题","type":"string"},{"key":"description","title":"组件内描述","type":"string"},{"key":"buttonText","title":"新增按钮的文案","type":"string"}]}},"events":{"onChange":{"desc":"内容改变时触发","args":[{"name":"newValue","desc":"改变后的数据信息","type":"Object[]"},{"name":"oldValue","desc":"改变前的数据信息","type":"Object[]"}]}},"category":["数据录入"],"theme":{"Container":{"name":"外部容器","desc":"外部容器样式","normal":[["width"],["height"],["background"]],"hover":[],"clicked":[],"disabled":[]},"Title":{"name":"标题","desc":"标题的样式","normal":[["margin"],["boxShadow"],["border"],["color"],["font"]],"hover":[],"clicked":[],"disabled":[]},"ButtonTheme":{"name":"新增按钮","desc":"新增按钮的样式","normal":[["margin"],["background"],["border"],["color"],["font"]],"hover":[],"clicked":[],"disabled":[]},"InputTheme":{"name":"输入框按钮","desc":"输入框的样式","normal":[["margin"],["border"],["color"],["font"]],"hover":[],"clicked":[],"disabled":[]}},"childrenWidget":[]},target: Todo,screenshot: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABSxJREFUWAntmW1oW1UYx885N0k32VhhtMV184tSdOqGOPDl20Anio6kUttMk/Vlggzm+yar+EnmsBR8Ke5DcetLdEkNa7oNqlN8QfTDxE0GG61BFMFVwblRtFmTm3uO/+cmd7vGm9zEJGUfvJDec859Xn73PM957rm3nOWPjif6bsrqmVcUY3dhqA0/bl1bojNcsyScnvR4fa/G3zv4A/k1IfzB7UEm1buMqeuWCMbFDU8xwXdMRceinGZO1/UzBMc5/5BxbZALLekzpHSxUtPLGU0IJY02powXlVIPYu5SXq93o4fCCk8mXCI2/lBNvVZu7BeofBboCk8TJLGJfM4BWBus3F6dNPIsxCbgghYEo7DWyV3FZm0sbQRoLpSlzrlS1DYWToDX9PE/YLXh8ZRjoLe3d+V8Sq0Xy9mP8ZGR38vRqUbG8GU5S+cslAQMhPpuY7o+fHFBvxvi3EgxhhqVVIrvmpoY+7gaiHJ1i+agv3P7FpbJnELBvIeMcc6oiGbRR1mSJ/yd4WfKdVKNnCNgd3d3I2fqEAqlD4+/Y97l2ppELLJupa+lEaBv5B2+3vF4z/pqnJej6wg4n1FbFVOtMPD92qZVj8VHR38jY5HI4AJAnydoPLsbstLoK8dJNTKOgMpQm8goQKaGhoby6XrVjeI8ZvYkM+WuXql9y3GRcI5MQ3zxx3FPKDBubnWQB5UgdfT0NBmXjSehe6tg6mfOxftHomPnStlwnEEmxClSwgz6kY/LCg1IpbpoDJzfFl4r1n90W/i+bMo4B919UNwmFdsrpTzdHgzvKqZD446AnhUNR2nV0oqdX5Txrq7eNSRM9TDQFXoLzUcAv8iZPEjjbgdVBOwujyOvmxCS00KIl6CDPvNJqd4OdIZ3F7PhCBgfHp7H9qsXc5gG5MOLSj8PsLlLC/olhP5pGEMasj2JichMMcPWeCDYfT9S5ijsIBJ8em1z472T0bGBqYnIVsHZfpID+EAxSEdAUkpERz/RBL8TM/UVfogMux53rKE9q2l8y2R0fIjkSh0Ex5Q8ZsGta17Vbl90k7FIvxsk93eGzERfxr2tsdihOSeHHTt3rpAX/7xZ+vhPifHxP5xkCsfc4OzyeDrtw0300xhnfI+ngR3W04oeDMxxFdMF+xE/cOAv9MteEJXAkR+8arwMSKoa/RRuPS2Q87kCUTTEdsBK2pXCWbYJEunzWq4vn7XGawr4X+EsmH9C5kZrBmhuLkosCAvC7UyQ1sIh2bJyMBAOr2a6thHVf+5IdHS20AnB2UtJ4WotlHfraz7+jkyrvSTnOoPtwdALKs3OK5n91JDGDLZZHwVCTzVbTiistYSz7FrnkjMYCIYHUOlR5RXtB39FEWjBSnuA6akvgsEdmxdZdkOpOmc5qeZcdAYJTplwwOJiNwpzq+B8AzpzgLxlUWW+rjcc3ZgjoB1OCPZcIjY2iBKgaOfBFduch7wRoPT4OlFtzpWa4X8BFsJNRiNv2g0kJsaTFiSNI/Q3XLhwudEuU8v2FUB6k3KDsxzbIfPh/hw52WJdr/asZTy5xwgMXQHUM2y/lXMU1sKZK3RaT0jztTPvkABztEqFaKwcuLwuqxekYfisnbwiwKTlsBI4S6cekOaHzJyDpECWf2O2Of/OLawWVOG55pD4yko+MI0na/oJOMtkm6HkFLZMq1CWZpA8/gbuoa2a61HsE7AZ62v5I7pGtzZ79szZ2+/Y9AFiT/WM3uJW42clKppLctBipX9DTHu9vuDk4ZEvyevf3jHHr14uq9EAAAAASUVORK5CYII='}, ];