/* eslint-disable @typescript-eslint/camelcase */
// 다국어 지원을 위한 messages
export default {
  ko: {
    account: {
      type: {
        Admin: "관리자",
        SuperAdmin: "최고관리자",
        Staff: "스탭",
        Operator: "오퍼레이터",
      },
      state: {
        confirmWaiting: "승인대기중",
        normal: "정상",
        inactive: "비활성",
      },
    },
    submit: {
      default: "보내기",
      create: "생성",
      modify: "수정",
      delete: "삭제",
      activate: "활성화",
      deactivate: "비활성화",
      login: "로그인",
      find: "찾기",
      register: "등록",
      account_register: "회원가입",
      enter: "입장하기",
      survey: "설문조사",
      long_survey: "설문 참여하기",
      long_modify_cancel: "수정 취소하기",
      long_question: "질문올리기",
      long_question_modify: "질문 수정하기",
      long_answer: "답글올리기",
      long_answer_modify: "답글 수정하기",
      like: "좋아요",
      close_answer: "답글 닫기",
      new_answer: "답글 등록",
    },
    navigations: {
      next_page: "다음 페이지",
      prev_page: "이전 페이지",
    },
    messages: {
      searching: "검색중입니다... 잠시 기다려 주세요",
    },
    placeholders: {
      account_name: "ID를 입력하세요",
      name: "이름을 입력하세요",
      code: "입장코드를 입력하세요",
      password: "비밀번호를 입력하세요",
      question: "질문을 입력해주세요. (최대 200자)",
      answer: "답글을 달아주세요.",
    },
    labels: {
      id: "ID",
      account_type: "계정 종류",
      account_state: "계정 상태",
      password: "비밀번호",
      mobile: "휴대전화 번호",
      email: "E-mail",
      name: "이름",
      organization_name: "조직 이름",
      search: "검색",
      code: "입장코드",
      answer: "답글",
    },
    errors: {
      forgot_grants_email: "입력하신 이메엘로 로그인 정보가 전송됩니다",
      email_required: "이메일을 입력해 주세요",
      name_required: "이름을 입력해 주세요",
      organization_name_required: "조직 이름을 입력해 주세요",
      valid_email_required: "이메일 형식을 맞춰서 입력해 주세요",
      forgot_grants_mobile: "입력하신 휴대전화번호로 로그인 정보가 전송됩니다",
      mobile_required: "휴대전화번호를 입력해 주세요",
      valid_mobile_required: "숫자만 입력해 주세요",
      account_name_required: "계정 ID를 입력해주세요",
      account_password_required: "계정 비밀번호를 입력해주세요",
      account_name_duplicated: "계정 ID가 중복되어 있습니다.",
      code_required: "입장코드를 입력해 주세요",
      code_invalid: "입장코드가 맞지 않습니다.",
      login_invalid: "로그인 정보가 맞지 않습니다.",
    },
    title: {
      login: "로그인",
      register: "회원가입",
      forgot_grants: "ID/비밀번호 찾기",

      // 기본적으로는 페이지 path를 따라 만든다, :id -> modify로 대체
      accounts: {
        new: "새 계정 만들기",
        modify: "계정 수정",
        me: "내 계정 수정",
        list: "계정관리",
      },
      organizers: {
        new: "새 오거나이저 만들기",
        modify: "오거나이저 정보 수정",
        me: "내 오거나이저 정보 수정",
        list: "오거나이저 관리",
      },
      organizations: {
        new: "새 조직 만들기",
        modify: "조직 정보 수정",
        me: "내 조직 정보 수정",
      },
      events: {
        new: "이벤트 생성",
        modify: "이벤트 수정",
        list: "이벤트 관리",
      },
    },
  },
  en: {
    submit: {
      default: "Submit",
      create: "Create",
      modify: "Modify",
      delete: "Delete",
    },
    title: {
      // 기본적으로는 페이지 path를 따라 만든다, :id -> modify로 대체
      accounts: {
        new: "새 계정 만들기",
        modify: "계정 수정",
        me: "내 계정 수정",
      },
      organizers: {
        new: "새 오거나이저 만들기",
        modify: "오거나이저 정보 수정",
        me: "내 오거나이저 정보 수정",
      },
      organizations: {
        new: "새 조직 만들기",
        modify: "조직 정보 수정",
        me: "Modify my organization",
      },
      events: {
        new: "이벤트 생성",
        modify: "이벤트 수정",
      },
    },
  },
}
