import React from "react";
import { Label, Button, Input, Checkbox } from "@lugia/lugia-web";
import CSSComponent  from "@lugia/theme-css-hoc";
import { deepMerge } from "@lugia/object-utils";

const CheckBoxGroup = Checkbox.Group;

const Container = CSSComponent({
  tag: "div",
  className: "Container",
  normal: {
    selectNames: [["width"], ["height"], ["background"]]
  },
  css: `background: #fff;`
});

const SingleLine = CSSComponent({
  tag: "div",
  className: "SingleLine",
  normal: {
    selectNames: [["margin"], ["boxShadow"], ["border"],["color"],["font"]]
  },
  css: `margin: 10px 0;`
});

const defaultInputTheme = {
  Container: { normal: { width: "70%", height: 40 } }
};
const defaultButtonTheme = {
  Container: { normal: { height: 40, margin: { right: 8, left: 8 } } }
};

class Todo extends React.Component<any, any> {
  constructor(props) {
    super();
    this.state = {
      data: props.data
    };
  }

  render() {
    const containerTheme = this.props.getPartOfThemeProps("Container");
    const titleTheme = this.props.getPartOfThemeProps("Title");
    const descriptionTheme = this.props.getPartOfThemeProps("Description");
    const inputTheme = this.getThemeForLugiaWeb(
      "InputTheme",
      defaultInputTheme
    );
    const buttonTheme = this.getThemeForLugiaWeb(
      "ButtonTheme",
      defaultButtonTheme
    );
    const deleteTheme = this.getThemeForLugiaWeb(
      "DeleteTheme",
      defaultButtonTheme
    );

    const {
      config: { title, description, buttonText } = {
        title: "待办事项",
        description: "描述信息",
        buttonText: "添加"
      },
      themeProps
    } = this.props;

    const { data = [], value } = this.state;
    return (
      <Container themeProps={containerTheme}>
        <SingleLine themeProps={titleTheme}>
          <Label>{title}</Label>
        </SingleLine>
        <SingleLine themeProps={descriptionTheme}>
          <Label>{description}</Label>{" "}
        </SingleLine>
        <SingleLine themeProps={themeProps}>
          <Input {...inputTheme} value={value} onChange={this.onChange} />
          <Button {...buttonTheme} type="primary" onClick={this.doAddTodo}>
            {buttonText}
          </Button>
          <Button {...deleteTheme} type="danger" onClick={this.doDeleteTodo}>
            删除待办
          </Button>
        </SingleLine>
        <SingleLine themeProps={themeProps}>
          {this.getListFromData(data)}
        </SingleLine>
      </Container>
    );
  }

  getThemeForLugiaWeb = (themeName, defaultTheme) => {
    const { theme, viewClass } = this.props.getPartOfThemeHocProps(themeName);
    const resultTheme = deepMerge({ [[viewClass]]: defaultTheme }, theme);
    return { theme: resultTheme, viewClass };
  };

  getListFromData = data => {
    const { radioValue } = this.state;
    return (
      <CheckBoxGroup
        styles="vertical"
        value={radioValue}
        onChange={this.onRadioChange}
      >
        {data.map(item => {
          const { title, status } = item;
          const isDisabled = status === "finish";
          return (
            <Checkbox value={title} disabled={isDisabled}>
             {title}
            </Checkbox>
          );
        })}
      </CheckBoxGroup>
    );
  };

  onChange = (param: any) => {
    const { newValue: value } = param;
    this.setState({ value });
  };

  onRadioChange = (param: any) => {
    const { newValue } = param;
    this.setState({ radioValue: newValue });
  };

  doAddTodo = () => {
    const { data = [], value } = this.state;
    if (!value) {
      return;
    }
    const newData = [{ title: value, status: "inProcess" }].concat([...data]);
    this.setState({ data: newData, value: "" });
    const { onChange } = this.props;
    onChange && onChange({ newValue: newData, oldValue: data });
  };

  doDeleteTodo = () => {
    const { data = [], radioValue = [] } = this.state;

    let newData = [...data];
    radioValue.forEach(select => {
      newData = newData.reduce(function(newArr, itemArr) {
        const { title } = itemArr;
        const isSame = select === title;
        return !isSame ? newArr.concat(itemArr) : newArr;
      }, []);
    });

    this.setState({ data: newData, radioValue: [] });
    const { onChange } = this.props;
    onChange && onChange({ newValue: newData, oldValue: data });
  };
}

export default Todo;
